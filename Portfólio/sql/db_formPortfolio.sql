create database form_portfolio;
use form_portfolio;

create table contato (
	id int not null primary key auto_increment,
    nome varchar(35) not null,
    email varchar(35) not null,
    celular char(16) not null,
    mensagem varchar(500) not null
);

select * from contato;