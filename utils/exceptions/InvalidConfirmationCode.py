from .BaseHttpException import BaseHttpException 

class InvalidConfirmCodeException(BaseHttpException):
    def __init__(self, ) -> None:
        super().__init__()
        self.name = "InvalidConfirmCode"