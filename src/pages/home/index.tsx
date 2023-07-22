import NavBar from "@/components/app_components/NavBar";
import Text from "@/components/display-components/Text/Text";
import { FC } from "react";
interface HomeViewProps {}

const HomeView: FC<HomeViewProps> = () => {
    return ( 
        <main>
            <Text variant="subtitle1">{}</Text>
        </main>
    );
}

export default HomeView;