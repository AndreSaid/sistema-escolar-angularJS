angular.module("meuModulo")
.controller("indexController",function($scope){
	$scope.titulo = "Sistema com AngularJS";
	$scope.alunos = [{

	nome: "Andre",
	email: "andre@gmail.com",
	nota1: 65,
	nota2: 80, 
	nota3: 55,
	nota4: 60
},
{
	nome: "Karol",
	email: "karol@gmail.com",
	nota1: 100,
	nota2: 80, 
	nota3: 90,
	nota4: 60
},
{
	nome: "Ana",
	email: "ana@gmail.com",
	nota1: 70,
	nota2: 80, 
	nota3: 60,
	nota4: 60
},
{
	nome: "Matheus",
	email: "matheus@gmail.com",
	nota1: 40,
	nota2: 60, 
	nota3: 55,
	nota4: 60
},
{
	nome: "Davi",
	email: "davi@gmail.com",
	nota1: 10,
	nota2: 10, 
	nota3: 20,
	nota4: 60
}];
var init = function(){
	$scope.alunos.forEach(function(aluno){
		aluno.media = media(aluno);
	});
	limpaForm();
};
var contar2 = 0;
var media = function(Aluno){
	console.log(contar2++);
	var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2)+ parseFloat(Aluno.nota3)+parseFloat(Aluno.nota4))/4;
	return media.toFixed(2);
};

$scope.abreAddAluno = function(){
	$scope.editando = false;
	limpaForm();
	$('#modal1').openModal();
}

$scope.addAluno =function(Aluno){
	Aluno.media = media(Aluno);
	$scope.alunos.push(Aluno);
	$('#modal1').closeModal();
	limpaForm();
};

$scope.editando = false;
var alunoEditar;

$scope.editarAluno = function(Aluno){
	$scope.editando = true;
	angular.copy(Aluno,$scope.Aluno);
	$('#modal1').openModal();
	alunoEditar = Aluno;
};

$scope.salvarAluno = function(Aluno){
	alunoEditar.nome = Aluno.nome;
	alunoEditar.email = Aluno.email;
	alunoEditar.nota1 = Aluno.nota1;
	alunoEditar.nota2 = Aluno.nota2;
	alunoEditar.nota3 = Aluno.nota3;
	alunoEditar.nota4 = Aluno.nota4;
	alunoEditar.media = media(Aluno);
	$('#modal1').closeModal();
};

$scope.deletarAluno = function(Aluno){
	for(var index in $scope.alunos){
		var aux = $scope.alunos[index];
		if(Aluno === aux){
			$scope.alunos.splice(index,1);
		}

	}
};

var limpaForm = function(){
	$scope.Aluno = {
		nome: "",
	email: "",
	nota1: '',
	nota2: '', 
	nota3: '',
	nota4: '',
	media: ''
	}
};

init();

})