# Sistema de Barbearia

## Requisitos do sistema
 
- 🔐 Autenticação e Autorização 
- 📅 Agendamento de horários
- O cliente pode:
	- Ver horários disponíveis por dia e barbeiro
	- Agendar um horário com um barbeiro
	- Cancelar ou reagendar com antecedência 

- Barbearia pode:
	- Definir horários de funcionamento.
    - Ver agenda do dia por barbeiro.
    - Bloquear horários (ex: almoço, folga, feriado).

- ✂️ CRUD de serviços - Corte, barba, combo, .etc
	- Nome, duração, preço
	- Cada agendamento está ligado a um ou mais serviços

- 👤 CRUD de clientes
	- Histórico de agendamentos
	
-  🧔‍♂️ CRUD de barbeiros
	- Cadastro com nome, especialidades, dias/horários disponíveis.
	- Histórico de atendimentos
	
-  📊 Dashboard

	- Estatísticas: número de agendamentos, serviços mais feitos, barbeiro mais ativo.
	- Filtros por data, barbeiro, serviço.

## Regras de negócio

- O cliente só poderá agendar um horário se o barbeiro estiver com disponibilidade no mesmo.
- Só poderá ser cancelada com 36 horas de antecedência e reagendada com no máximo 24 horas de antecedência.

## Requisitos não funcionais

- Arquitetura **MVC** (Model, View, Controller)
- Autenticação com **JWT** (JSON WEB TOKEN)
- Autorização com **RBAC** (Role Based Access Control)
- Documentação da API com **Swagger**
- Testes unitários, de integração e end-to-end com **Vitest**
- Upload de imagens com **Cloudflare R2**



