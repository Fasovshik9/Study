#pragma once
#include <vector>
#include <chrono>	//for seconds
#include "Field.h"

#define UP 'w'
#define DOWN 's'
#define LEFT 'a'
#define RIGHT 'd'

bool Field::moveSnake(char move)
{

	for (int i = (this->vectorY.size() - 1); i > 0; --i)
	{
		this->vectorY[i] = this->vectorY[i - 1];
		this->vectorX[i] = this->vectorX[i - 1];
	}
	switch (move)
	{
	case UP:
		if (correctMoveSnake != 1)
		{
			correctMoveSnake = 2;
			this->vectorY.front()--;
		}
		else this->vectorY.front()++;
		break;
	case DOWN:
		if (correctMoveSnake != 2)
		{
			correctMoveSnake = 1;
			this->vectorY.front()++;
		}
		else this->vectorY.front()--;
		break;
	case LEFT:
		if (correctMoveSnake != 4)
		{
			correctMoveSnake = 3;
			this->vectorX.front()--;
		}
		else this->vectorX.front()++;
		break;
	case RIGHT:
		if (correctMoveSnake != 3)
		{
			correctMoveSnake = 4;
			this->vectorX.front()++;
		}
		else this->vectorX.front()--;
		break;
	case 0:
		this->vectorX.front()++;
		break;
	default:
		if (correctMoveSnake == 1)
			this->vectorY.front()++;
		if (correctMoveSnake == 2)
			this->vectorY.front()--;
		if (correctMoveSnake == 3)
			this->vectorX.front()--;
		if (correctMoveSnake == 4)
			this->vectorX.front()++;
	}

	if (createNewApple())
	{
		this->vectorY.push_back(1);
		this->vectorX.push_back(1);
	}
	else gameField[this->vectorY.back()][this->vectorX.back()] = ' ';

	gameField[this->vectorY.front()][this->vectorX.front()] = sybbolForSnake;
	if (checkLose())
		return 1;
	return 0;

}

bool Field::createNewApple()
{
	srand(static_cast<unsigned int>(time(0)));
	if (gameField[this->positionAppleY][this->positionAppleX] == gameField[this->vectorY.front()][this->vectorX.front()])
	{
		this->positionAppleY = 1 + rand() % (this->sizeGameFieldY - 2);
		this->positionAppleX = 1 + rand() % (this->sizeGameFieldX - 2);
		for (int i = 0; i < (this->vectorY.size() - 1); ++i)
		{
			if (((this->vectorY[i] == this->positionAppleY) && (this->vectorX[i] == this->positionAppleX)))
			{
				this->positionAppleY = 1 + rand() % (this->sizeGameFieldY - 2);
				this->positionAppleX = 1 + rand() % (this->sizeGameFieldX - 2);
				i = 0;
			}
		}
		this->ScorePlayer++;
		gameField[this->positionAppleY][this->positionAppleX] = sybbolForGameApple;
		return 1;
	}

	return 0;
}

bool Field::checkLose()
{
	if (this->vectorY.front() == 0 || this->vectorY.front() == sizeGameFieldY - 1 ||
		this->vectorX.front() == 0 || this->vectorX.front() == sizeGameFieldX - 1)
	{
		return 1;
	}
	for (int i = (this->vectorY.size() - 1); i > 0; --i)
	{
		if ((this->vectorY[i] == this->vectorY[i - 1]) && (this->vectorX[i] == this->vectorX[i - 1])) { return 1; }
		for (int i = 1; i < (this->vectorY.size() - 1); ++i)
		{
			if ((this->vectorY[0] == this->vectorY[i]) && (this->vectorX[0] == this->vectorX[i]))
				return 1;
		}
	}
}
