'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};
const { cash, react, add } = data;

employers.forEach(item => {
	if (item.length > 0 && item.trim() != '') {
		command.push(item.trim()[0].toUpperCase() + item.trim().slice(1).toLowerCase());
	}
})

const calcCash = (total, ...args) => {
	args.forEach(item => {
		total += item;
	})

	return total;
};

const makeBusiness = (director, teacher, allModule, gang, course) => {
	const sumTech = react.concat(add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher ? teacher : 'Максим'}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим:`);
	console.log(...sumTech);
}

makeBusiness('Артем', null, calcCash(null, ...cash), command, nameCourse);
