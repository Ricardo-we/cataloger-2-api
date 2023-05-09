from .BaseHttpException import BaseHttpException

class InvalidUserException(BaseHttpException):
    def __init__(self, ) -> None:
        super().__init__()
        self.name = "InvalidUser"

class UserNotExistsException(BaseHttpException):
    def __init__(self,) -> None:
        super().__init__()
        self.name = "UserNotExists"