class Endereco {
  constructor(estado, cidade, rua, numero) {
      this.estado = estado;
      this.cidade = cidade;
      this.rua = rua;
      this.numero = numero;
  }
  getEstadoUpper() { return this.estado.toUpperCase(); }
  getEstadoLower() { return this.estado.toLowerCase(); }
  getCidadeUpper() { return this.cidade.toUpperCase(); }
  getCidadeLower() { return this.cidade.toLowerCase(); }
  getRuaUpper() { return this.rua.toUpperCase(); }
  getRuaLower() { return this.rua.toLowerCase(); }
  getNumeroUpper() { return this.numero.toString().toUpperCase(); }
  getNumeroLower() { return this.numero.toString().toLowerCase(); }
}

class Telefone {
  constructor(ddd, numero) {
      this.ddd = ddd;
      this.numero = numero;
  }
  getDddUpper() { return this.ddd.toString().toUpperCase(); }
  getDddLower() { return this.ddd.toString().toLowerCase(); }
  getNumeroUpper() { return this.numero.toString().toUpperCase(); }
  getNumeroLower() { return this.numero.toString().toLowerCase(); }
}

class Cliente {
  #cpf;
  constructor(nome, cpf, endereco) {
      this.nome = nome;
      this.#cpf = cpf;
      this.endereco = endereco;
      this.telefones = new Set();
  }
  get cpf() { return this.#cpf; }
  getNomeUpper() { return this.nome.toUpperCase(); }
  getNomeLower() { return this.nome.toLowerCase(); }
  getCpfUpper() { return this.#cpf.toString().toUpperCase(); }
  getCpfLower() { return this.#cpf.toString().toLowerCase(); }
  adicionarTelefone(telefone) { this.telefones.add(telefone); }
}

class Empresa {
  #cnpj;
  constructor(razaosocial, nomeFantasia, cnpj, endereco) {
      this.razaosocial = razaosocial;
      this.nomeFantasia = nomeFantasia;
      this.#cnpj = cnpj;
      this.endereco = endereco;
      this.clientes = new Set();
      this.telefones = new Set();
  }
  get cnpj() { return this.#cnpj; }
  getRazaoSocialUpper() { return this.razaosocial.toUpperCase(); }
  getRazaoSocialLower() { return this.razaosocial.toLowerCase(); }
  getNomeFantasiaUpper() { return this.nomeFantasia.toUpperCase(); }
  getNomeFantasiaLower() { return this.nomeFantasia.toLowerCase(); }
  getCnpjUpper() { return this.#cnpj.toString().toUpperCase(); }
  getCnpjLower() { return this.#cnpj.toString().toLowerCase(); }
  adicionarCliente(cliente) { this.clientes.add(cliente); }
  adicionarTelefone(telefone) { this.telefones.add(telefone); }
  detalhe() {
      let descricao = `Razão Social: ${this.razaosocial}\nNome fantasia: ${this.nomeFantasia}\n---------------\n`;
      for (const cliente of this.clientes) {
          descricao += `Nome: ${cliente.nome}\n`;
          descricao += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
          for (const telefone of cliente.telefones) {
              descricao += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
          }
      }
      return descricao;
  }
}

// Teste
const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 1000);
const empresa = new Empresa("ABC LTDA", "Mercado Online", "123456789", enderecoEmpresa);
const telEmpresa1 = new Telefone("12", "99999999");
const telEmpresa2 = new Telefone("12", "88888888");
empresa.adicionarTelefone(telEmpresa1);
empresa.adicionarTelefone(telEmpresa2);

const cliente1 = new Cliente("João", "11111111111", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987));
cliente1.adicionarTelefone(new Telefone("12", "99999999"));
cliente1.adicionarTelefone(new Telefone("12", "99999998"));

const cliente2 = new Cliente("Gabriel", "22222222222", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 412));
cliente2.adicionarTelefone(new Telefone("12", "88888888"));
cliente2.adicionarTelefone(new Telefone("12", "88888887"));

const cliente3 = new Cliente("Barbara", "33333333333", new Endereco("SP", "São José dos Campos", "Av São João", 789));
cliente3.adicionarTelefone(new Telefone("12", "77777777"));
cliente3.adicionarTelefone(new Telefone("12", "77777776"));

const cliente4 = new Cliente("Márcia", "44444444444", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 452));
cliente4.adicionarTelefone(new Telefone("12", "66666666"));
cliente4.adicionarTelefone(new Telefone("12", "66666665"));

const cliente5 = new Cliente("Pedro", "55555555555", new Endereco("SP", "São José dos Campos", "Av São João", 123));
cliente5.adicionarTelefone(new Telefone("12", "55555555"));
cliente5.adicionarTelefone(new Telefone("12", "55555554"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe());