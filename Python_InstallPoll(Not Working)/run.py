import cv2
import mss
import mss.tools
import pyautogui as pyg
import numpy as np
import time
#397
#191
while True:
	try:
		buttonLocation = pyg.locateOnScreen('start.jpg',grayscale=False,confidence=0.6);
		if buttonLocation is not None:
			buttonPoint = pyg.center(buttonLocation)
			print(buttonPoint)
			pyg.click(buttonPoint.x/2, buttonPoint.y/2)
			pyg.click(buttonPoint.x/2, buttonPoint.y/2)
	except KeyboardInterrupt:
		break
	except:
		continue
	time.sleep(0.1)