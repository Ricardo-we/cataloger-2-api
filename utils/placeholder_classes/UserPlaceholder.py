
class UserPlaceholder:
    def __init__(self, user_dict: dict) -> None:
        self.id = user_dict.get("id")
        self.username = user_dict.get("username")
        self.email = user_dict.get("email")
        self.full_name = user_dict.get("full_name")
        self.password = user_dict.get("password")