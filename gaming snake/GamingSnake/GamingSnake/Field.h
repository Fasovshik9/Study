#pragma once

class Field
{
public:

	Field(unsigned int sizeGameFieldX = 40, unsigned int sizeGameFieldY = 20, char sybbolForGameField = '#',
		unsigned int correctMoveSnake = 4, char sybbolForSnake = 219, char sybbolForGameApple = '*');
	~Field();

	int getScorePlayer();
	bool moveSnake(char move);
	void showGameFied();
	void showInfoMessageLose();
	void showInfoMessageWin();

protected:
	//field
	unsigned int sizeGameFieldX;
	unsigned int sizeGameFieldY;
	char sybbolForGameField;
	char** gameField;
	//snake
	std::vector<unsigned int> vectorY;
	std::vector<unsigned int> vectorX;
	unsigned int correctMoveSnake;
	char sybbolForSnake;
	//apple
	unsigned int positionAppleX;
	unsigned int positionAppleY;
	unsigned int ScorePlayer;
	char sybbolForGameApple;

	bool createNewApple();
	bool checkLose();
};

