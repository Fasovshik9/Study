#include <iostream>
#include <conio.h>
#include <thread>	//for sleep_for
#include <vector>
#include "Field.h"
#include "levelTwo.h"

bool levelTwo()
{
	unsigned int bufScore = 0;
	unsigned int tiemGame = 300;
	unsigned int fieldSizeY = 25;
	unsigned int fieldSizeX = 15;
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
		if (StartGame.getScorePlayer() == ((fieldSizeY - 2) * (fieldSizeX - 2)) / 4)
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