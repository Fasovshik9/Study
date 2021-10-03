#include <iostream>
#include <conio.h>
#include <thread>	//for sleep_for
#include <vector>
#include "Field.h"
#include "LevelOne.h"

bool levelOne()
{
	unsigned int bufScore = 0;
	unsigned int tiemGame = 500;
	unsigned int fieldSizeY = 20;
	unsigned int fieldSizeX = 10;
	bool exitSeconFlow = false;
	Field StartGame(fieldSizeY, fieldSizeX);
	char presKey = 0;
	std::thread t([&]()
		{
			while (!exitSeconFlow) { presKey = _getch(); }
		});

	while (presKey != 'q')
	{
		std::this_thread::sleep_for(std::chrono::milliseconds(tiemGame));	//delay
		if (exitSeconFlow = StartGame.moveSnake(presKey))
		{
			StartGame.showInfoMessageLose();
			t.join();
			return 0;
		}
		StartGame.showGameFied();
		if (StartGame.getScorePlayer() != bufScore && tiemGame > 10)
		{
			bufScore = StartGame.getScorePlayer();
			tiemGame -= 10;
		}
		if (exitSeconFlow = (StartGame.getScorePlayer() == ((fieldSizeY - 2) * (fieldSizeX - 2)) / 4))
		{
			StartGame.showInfoMessageWin();
			t.join();
			return 0;
		}
	}
	std::cout << "Press any button to continue";
	exitSeconFlow = true;
	t.join();
	return 0;
}