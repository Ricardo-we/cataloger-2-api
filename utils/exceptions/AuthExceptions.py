from .BaseHttpException import BaseHttpException

class TokenNotExists(BaseHttpException):
    def __init__(self) -> None:
        super().__init__()
        self.name = "TokenNotExists"
        self.type = "auth"

class InvalidTokenException(BaseHttpException):
    def __init__(self)  -> None:
        super().__init__()
        self.name = "InvalidTokenException"
        self.type = "auth"