import os

# SECURITY
API_KEY = os.environ.get('MICROSERVICE_NEWS_API_KEY', 'SUPERSECRETKEY')

# POSTGRES SETTINGS
POSTGRES_USER = os.environ.get('NEWS_MS_POSTGRES_USER', 'postgres')
POSTGRES_PASSWORD = os.environ.get('NEWS_MS_POSTGRES_PASSWORD', 'password')
POSTGRES_HOST = os.environ.get('NEWS_MS_POSTGRES_HOST', 'localhost')
POSTGRES_PORT = os.environ.get('NEWS_MS_POSTGRES_PORT', '5432')
POSTGRES_DB = os.environ.get('NEWS_MS_POSTGRES_DB', 'postgres')