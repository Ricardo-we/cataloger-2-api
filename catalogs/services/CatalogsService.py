from ..models import Catalog
from users.models import User

class CatalogServiceBase:
    def find_catalogs_by_user_id(self, user_id: int): pass
    def create_catalog(self, catalog_data: dict, user): pass

class CatalogService(CatalogServiceBase):

    def find_catalogs_by_user_id(self, user_id: int):
        user = User.objects.filter(id=user_id).first()
        catalogs = Catalog.objects.filter(user=user).all()
        return user, catalogs


    def create_catalog(self, catalog_data: dict, user):
        new_catalog = Catalog.objects.create(
            name=catalog_data.get("name"),
            user=user,
            background=catalog_data.get("background"),
        )

        return new_catalog