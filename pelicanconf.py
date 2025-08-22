#
# Author: Wandeson Ricardo
# Site: https://www.dimensaoalfa.com.br
# Github: github.com/wsricardo
#

from datetime import datetime

AUTHOR = 'Wandeson Ricardo'
SITENAME = 'Dimensão Alfa'
# Use uma URL vazia para desenvolvimento (links relativos)
# Em produção, mude para "https://dimensaoalfa.github.io"
SITEURL = "https://www.dimensaoalfa.com.br"
#BLOG = f"{SITEURL}/blog"

PATH = "content"
TIMEZONE = 'America/Recife'
DEFAULT_LANG = 'pt_BR'

# --- Configurações do Tema ---
THEME = "theme"

DEFAULT_PAGINATION = 10

# --- Estrutura de URLs e Arquivos ---

# Onde o site final será gerado.
OUTPUT_PATH = 'blog/'


RELATIVE_URLS = True

# Salva a lista de posts (página principal do blog) em /blog/index.html
INDEX_SAVE_AS = 'index.html'

# Formato de URL para os artigos individuais.
#ARTICLE_URL = 'posts/{slug}.html'
#ARTICLE_SAVE_AS = 'posts/{slug}.html'
ARTICLE_URL = 'posts/{date:%Y}/{date:%d}-{date:%m}-{slug}.html'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%d}-{date:%m}-{slug}.html'

# Formato de URL para páginas estáticas.
#PAGE_PATHS = ['pages']
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

# Adiciona o ano atual ao contexto para usar no rodapé.
JINJA_GLOBALS = {'CURRENT_YEAR': datetime.now().year}
