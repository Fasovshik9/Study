#include <iostream>
#include <vector>

#include "Field.h"


Field::Field(unsigned int sizeGameFieldX, unsigned int sizeGameFieldY, char sybbolForGameField,
	unsigned int correctMoveSnake, char sybbolForSnake, char sybbolForGameApple)
{
	//field
	this->sizeGameFieldX = sizeGameFieldX;
	this->sizeGameFieldY = sizeGameFieldY;
	this->sybbolForGameField = sybbolForGameField;
	//snake
	this->correctMoveSnake = correctMoveSnake;
	this->sybbolForSnake = sybbolForSnake;
	//vector
	vectorY = { this->sizeGameFieldY / 2,this->sizeGameFieldY / 2,this->sizeGameFieldY / 2 };
	vectorX = { this->sizeGameFieldX / 2,this->sizeGameFieldX / 2 - 1,this->sizeGameFieldX / 2 - 2 };
	//apple
	this->ScorePlayer = 0;
	srand(static_cast<unsigned int>(time(0)));
	this->positionAppleY = 1 + rand() % (this->sizeGameFieldY / 2 - 1);
	this->positionAppleX = 1 + rand() % (this->sizeGameFieldX - 2);
	this->sybbolForGameApple = sybbolForGameApple;
	//initialisation mass
	gameField = new char* [this->sizeGameFieldY];
	for (int i = 0; i < this->sizeGameFieldY; ++i)
	{
		gameField[i] = new char[this->sizeGameFieldX];
		for (int j = 0; j < this->sizeGameFieldX; ++j)
		{
			if (i == 0 || i == this->sizeGameFieldY - 1 || j == 0 || j == this->sizeGameFieldX - 1)
			{
				gameField[i][j] = this->sybbolForGameField;
			}
			else gameField[i][j] = ' ';
		}
	}
	gameField[this->positionAppleY][this->positionAppleX] = this->sybbolForGameApple;
}

Field::~Field()
{
	for (int i = 0; i < sizeGameFieldY; ++i)
	{
		delete[] gameField[i];
	}
	delete[] gameField;
}

int Field::getScorePlayer() { return this->ScorePlayer; }

void Field::showGameFied()
{
	system("cls");
	std::cout << "\tScore: " << this->ScorePlayer << '\n';
	for (int i = 0; i < sizeGameFieldY; ++i)
	{
		for (int j = 0; j < sizeGameFieldX; ++j)
		{
			std::cout << gameField[i][j];
		}
		std::cout << '\n';
	}

}

void Field::showInfoMessageLose()
{
	std::cout << "You are lose. Your score = " << this->ScorePlayer << std::endl;
	std::cout << "Press any button to continue";
}

void Field::showInfoMessageWin()
{
	std::cout << "You are WIN! Your score = " << this->ScorePlayer << std::endl;
	std::cout << "Press any button to continue";
}
