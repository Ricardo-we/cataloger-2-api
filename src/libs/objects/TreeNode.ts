type TreeNodeIterationCallback<T> = (
    item: TreeNode<T>,
    nestingLevel: number
) => any;
type TreeNodeFindCallBack<T> = (
    item: TreeNode<T>,
    nestingLevel: number
) => boolean;

export class TreeNode<T> {
    children?: Array<TreeNode<T>>;
    parent: TreeNode<T> | null;
    value: T | null;

    constructor(value?: T) {
        this.children = [];
        this.parent = null;
        this.value = value ?? null;
    }

    getNestingLevel = () => {
        let level = 0;
        // let hasParent = true;
        let parent = this.parent;
        while (parent !== null) {
            parent = parent.parent;
            level++;
        }

        return level;
    };

    forEach = (cb: TreeNodeIterationCallback<T>) => {
        cb(this, this.getNestingLevel());
        if (!this.children) return;
        for (const item of this.children) {
            item.forEach(cb);
        }
    };

    map = (cb: TreeNodeIterationCallback<T>) => {
        const result: any = [];
        const nestLevel = this.getNestingLevel();
        result.push(cb(this, nestLevel));
        if (!this.children) return;
        for (const item of this.children) {
            result.push(item.map(cb));
        }
        return result;
    };

    find = (cb: TreeNodeFindCallBack<T>) => {
        const founded = cb(this, this.getNestingLevel());
        if (founded) return this;
        if (!this.children) return;
        for (const item of this.children) {
            const founded = item.find(cb);
            if (founded) return item;
        }
    };

    append = (node: TreeNode<T>) => {
        node.parent = this;
        this.children?.push(node);
        return this;
    };

    appendList = (nodes: TreeNode<T>[]) => {
        nodes?.forEach(node => this.append(node));
        return this;
    };

    appendTreeFrom = (items: Array<any | object>, childAccessKey: string) => {
        if (!items || !Array.isArray(items)) return;
        items?.forEach(item => {
            // console.log(this.value, item)
            const treeChild = new TreeNode<T>(item);
            if (item?.[childAccessKey] && Array.isArray(item?.[childAccessKey]))
                treeChild.appendTreeFrom(
                    item?.[childAccessKey],
                    childAccessKey
                );

            this.append(treeChild);
            // return treeChild;
        });
        return this;
    };

    static createTreeFrom<T>(rawTree: any, childAccessKey: any) {
        if (typeof rawTree !== "object") return null;
        const rootTree = new TreeNode<T>({
            ...rawTree,
            [childAccessKey]: null,
        });
        rootTree.appendTreeFrom(rawTree?.[childAccessKey], childAccessKey);
        return rootTree;
    }

    // static makeTreeFromFlatList<T>(flatList: T[], childAccessKey: string){
    // 	const root = new TreeNode<T>();

    // 	if(flatList)
    // }
}
