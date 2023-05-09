translations = {
    "generic": {
        "email-message": lambda code: f"Bienvenido a cataloger! To código es: {code}, tienes 30 minutos para utilizar este código de otra manera tu cuenta y el código serán eliminados",
        "general-error": "Ha ocurrido un error"
    },
    "validation": {
        "InvalidUser": "Usuario Inválido",
        "InvalidEmail": "Correo Inválido",
        "InvalidPassword": "Contraseña Inválida",
        "UserNotExists": "El usuario no existe",
        "IntegrityError": "Este dato ya existe",
        "DbIntegrityException": lambda field: f"El {field} ya existe" 
    },
    "auth": {
        "TokenNotExists": "El usuario actual no tiene token",
        "InvalidTokenException": "El token no es válido"
    },
}