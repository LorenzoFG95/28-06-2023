log di cosa sto facendo:  
-Ho creato la branch main, l'ho resa la branch default e ho cancellato la branch master.  
-Ho creato la branch develop  
-A partire dalla branch develop ho creato la prima branch feature  
-Ho fatto il merge direttamente su main per vedere se potevo ritornare indietro  
-ho fatto reset e ho force push per far tornare il branch main al commit precedente  
-ho fatto il merge dalla branch feature paragraph a develop e poi a main  
-ho fatto altra feature: lo sfondo che cambia, merge a develop e poi richiesta di pull direttamente da github  
-ho provato a simulare dei conflitti. Prima ho creato due branch paralleli da develop: sottotitolo 1 e due, con contenuti diversi. Al merge però non evocava conflitti ma semplicemente uno dei due sovrasciveva l'altro. Il conflitto sono riuscito ad evocarlo nel momento in cui ho provato a fare un merge da un develop a sottotitolo2 nel caso in cui l'ultimo commit di develop era più recente di quello dal quale sottotitolo2 era originato.



  ![screenshot](https://github.com/LorenzoFG95/28-06-2023/assets/76057564/711b861e-573a-4e15-af1b-63ffcfdd1708)
