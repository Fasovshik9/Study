#include <iostream>
#include <conio.h>
#include "levelOne.h"
#include "levelTwo.h"
#include "levelThree.h"

bool menu();

int main()
{
	std::cout << "\t     -= Game Snake =- \n";
	std::cout << "\t       Control Keys \n";
	std::cout << "\t\t    ^    \n";
	std::cout << "\t\t    |    \n";
	std::cout << "\t\t<-a   d->\n";
	std::cout << "\t\t    |    \n";
	std::cout << "\t\t    v    \n";
	std::cout << "\tEnglish keyboard only !\n\t";
	system("pause");
	if (menu())
		return 0;
}

bool menu()
{
	char presKey = 0;
	do
	{
		system("cls");
		std::cout << "\t\t-=Menu=-\n\t\t1 level\n\t\t2 level\n\t\t3 level\n\t\t4 Exit\n";
		presKey = _getch();
		switch (presKey)
		{
		case '1':
			levelOne();
			break;
		case '2':
			levelTwo();
			break;
		case '3':
			levelThree();
			break;
		case '4':
			return 0;
			break;
		}
	} while (true);
}