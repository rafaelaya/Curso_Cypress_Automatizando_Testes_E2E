Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

Cdastro incorreto:
acessar a página de cadastro;
deixar algum dos campos obrigatórios (como o nome, e-mail ou a confirmação da senha) em branco;
clicar no botão de "Cadastrar".


Dentro da funcionalidade de login no site Adopet, temos um cenário de caminho feliz. Esse cenário é o login no sistema com sucesso e os passos feitos pela pessoa usuária são:


acessar a página de login:
inserir o e-mail "ana@email.com" e a senha "Senha123" nos campos correspondentes;
clicar no botão "Entrar".
Os resultados esperados do sistema são que ele consiga autenticar as credenciais fornecidas e redirecione para a página home.

-----

Agora é com você! A partir do Roteiro de testes abaixo, escreva um teste e complemente sua suíte no login:

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão de login.
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres
Você pode conferir a sugestão do instrutor clicando em Ver Opinião do instrutor

Boa prática!

