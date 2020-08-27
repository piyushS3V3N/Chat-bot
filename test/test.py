#!/usr/bin/python
import json
import random
import re

#Handles the writing to json file in case new word detected
def write_json(data, filename='data.json'):
    with open(filename,'w') as f:
        json.dump(data, f, indent=4)

#Reads from data.json file to reply to user
def loadfiles():
    with open("data.json","r") as readfile:
        j_ob = json.load(readfile)
    return j_ob
bot_mark ="[^_^] "
i  = 0
j_ob = loadfiles()
while(True):
    talk = input(" >> ")
    if(talk.lower() in j_ob):
        i = random.randint(0,len(j_ob[talk.lower()])-1)
        print(bot_mark+j_ob[talk.lower()][i])
    elif(talk.lower() in j_ob["byees"]):
        print(bot_mark+talk+" :)")
        break
#To Train The ai for new sectioned word
    elif(talk.find("remember")+1):
        dat = re.findall(r'"(.*?)"', talk)
        print(dat)
        to_remember = [dat[1]]
        sect = str(dat[0])
        if sect in j_ob:
            j_ob[sect].append(to_remember)
        else:
            j_ob.update({sect:to_remember})
    elif(talk == "reload"):
        j_ob = loadfiles()
    else:
        print(bot_mark+" Sorry i don't know how to respond to that [:(]")
    write_json(j_ob)
