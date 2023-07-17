translations = {
    "generic": {
        "email-message": lambda code: f"Welcome to cataloger! Your redeem code is: {code}, you have 30 minutes to use it otherwise will expire and the account info will be deleted",
        "general-error": "An error have ocurred"
    },
    "validation": {
        "InvalidUser": "Invalid User",
        "InvalidEmail": "Invalid Email",
        "InvalidPassword": "Invalid password",
        "UserNotExists": "User does not exists",
        "IntegrityError": "This item already exists",
        "DbIntegrityException": lambda field: f"The {field} already exists",
        "InvalidConfirmCode": "Confirmation code is invalid",
    },
    "auth": {
        "TokenNotExists": "Current user does not have a token",
        "InvalidTokenException": "Sended token is not valid"
    }
}