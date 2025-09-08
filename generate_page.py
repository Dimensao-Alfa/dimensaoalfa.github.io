import os
import json
from jinja2 import Environment, FileSystemLoader


# Load Data products
db = ''
with open("shopdb.json", "r", encoding="utf-8") as fl:
    db = json.loads( fl.read() )

amazon_products = db[0]["Amazon"]
shopee_products = db[0]["Shopee"]



# --- 1. Defina os dados dos produtos ---
# Estes são os dados que preencherão o seu template.
# No futuro, você pode carregar isso de um banco de dados, um arquivo CSV, JSON, etc.
"""amazon_products = [
    {
        "name": "Livro: O Guia do Mochileiro das Galáxias",
        "link": "https://www.amazon.com.br/dp/B086V89364",
        "name_link": "Comprar na Amazon",
        "price": "R$ 49,90"
    },
    {
        "name": "Kindle 11ª Geração",
        "link": "https://www.amazon.com.br/dp/B09SWW583J",
        "name_link": "Ver na Amazon",
        "price": "R$ 499,00"
    },
]

shopee_products = [
    {
        "name": "Fone de Ouvido Bluetooth",
        "link": "https://shopee.com.br/some-product-link",
        "name_link": "Comprar na Shopee",
        "price": "R$ 89,90"
    },
    {
        "name": "Capa para Celular",
        "link": "https://shopee.com.br/another-product-link",
        "name_link": "Ver na Shopee",
        "price": "R$ 25,00"
    },
]"""

# --- 2. Configure o ambiente do Jinja2 ---
# O FileSystemLoader diz ao Jinja onde encontrar seus arquivos de template.
# Estamos dizendo para procurar na pasta 'templates'.
project_path = os.path.dirname(os.path.abspath(__file__))
templates_path = os.path.join(project_path, 'templates')
env = Environment(loader=FileSystemLoader(templates_path))

# --- 3. Carregue o template ---
template = env.get_template('shop.html')

# --- 4. Renderize o template com os dados ---
# Aqui, passamos as listas de produtos para o template.
# As chaves 'amazon_items' e 'shopee_items' devem corresponder às variáveis no template.
output_html = template.render(
    amazon_items=amazon_products,
    shopee_items=shopee_products
)

# --- 5. Salve o arquivo HTML final ---
# O arquivo renderizado será salvo na pasta raiz do projeto, substituindo o antigo se houver.
output_path = os.path.join(project_path, 'shop.html')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(output_html)

print(f"Página 'shop.html' gerada com sucesso em: {output_path}")
