-- CreateTable
CREATE TABLE "acesso" (
    "codigo" SERIAL NOT NULL,
    "ip" VARCHAR(15) NOT NULL,
    "dt_acesso" DATE NOT NULL,

    CONSTRAINT "acesso_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "awards" (
    "codigo" SERIAL NOT NULL,
    "cod_file" INTEGER NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "company_name" VARCHAR(100) NOT NULL,
    "company_logo" INTEGER NOT NULL,
    "descricao" VARCHAR(600) NOT NULL,
    "dt_geracao" DATE NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "awards_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "backend" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "backend_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "certificates" (
    "codigo" SERIAL NOT NULL,
    "dt_geracao" DATE NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "company" VARCHAR(150) NOT NULL,
    "cod_image" INTEGER NOT NULL,
    "cod_file" INTEGER NOT NULL,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "cloud" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "cloud_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "databases" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "databases_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "devops" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "devops_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "education" (
    "codigo" SERIAL NOT NULL,
    "periodo" VARCHAR(250) NOT NULL,
    "titulo" VARCHAR(250) NOT NULL,
    "empresa" VARCHAR(150) NOT NULL,
    "endereco" VARCHAR(250) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "experience" (
    "codigo" SERIAL NOT NULL,
    "periodo" VARCHAR(250) NOT NULL,
    "titulo" VARCHAR(250) NOT NULL,
    "empresa" VARCHAR(150) NOT NULL,
    "endereco" VARCHAR(250) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "files" (
    "codigo" SERIAL NOT NULL,
    "file_name" VARCHAR(250) NOT NULL,
    "file_path" VARCHAR(250) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,
    "tipo" VARCHAR(50),

    CONSTRAINT "files_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "frontend" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "frontend_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "mobile" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "mobile_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "projects" (
    "codigo" SERIAL NOT NULL,
    "cod_image" INTEGER NOT NULL,
    "url" VARCHAR(300) NOT NULL,
    "link_rep" VARCHAR(300) NOT NULL,
    "dt_cadastro" DATE NOT NULL,
    "dt_atualizacao" DATE NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "awards" ADD CONSTRAINT "awards_cod_file_fkey" FOREIGN KEY ("cod_file") REFERENCES "files"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "awards" ADD CONSTRAINT "awards_company_logo_fkey" FOREIGN KEY ("company_logo") REFERENCES "files"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_cod_file_fkey" FOREIGN KEY ("cod_file") REFERENCES "files"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_cod_image_fkey" FOREIGN KEY ("cod_image") REFERENCES "files"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_cod_image_fkey" FOREIGN KEY ("cod_image") REFERENCES "files"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;
