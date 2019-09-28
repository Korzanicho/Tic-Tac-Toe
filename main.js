const vm = new Vue({
    el: "#app",
    data:{
		title: "Kółko i Krzyżyk",
		write : "X",
		fieldValues : [],
		win: false,
		winner: "",
		ticTocKey: 1,
		xScore: 0,
		oScore: 0
	},
	methods:{
		writeXOrO: function(e){
			if(!this.win && event.target.innerHTML==""){
				if(this.write == "X"){
					event.target.innerHTML = "<span>X</span>";
					this.write = "O";
					this.checkWinner(event.target);
				}
				else{
					event.target.innerHTML = "<span>O</span>";
					this.write = "X";
					this.checkWinner(event.target);
				}		
			}
		},
		checkWinner: function(element){
			elementId = element.id;
			elementValue = element.innerText;
			this.fieldValues[elementId] = elementValue;
			arr = this.fieldValues;
			let addScore = (v) =>{
				this.winner = `Wygrywa ${v}!`;
				if(v=="X"){
					this.xScore++;
				}
				else{
					this.oScore++;
				}
				this.win = true;
			}

			if(arr[1]===arr[2] && arr[2]===arr[3] && arr[1]!=undefined){
				addScore(arr[1]);
			}else
			if(arr[4]===arr[5] && arr[5]===arr[6] && arr[4]!=undefined){
				addScore(arr[4]);
			}else
			if(arr[7]===arr[8] && arr[8]===arr[9] && arr[7]!=undefined){
				addScore(arr[7]);
			}else
			if(arr[1]===arr[4] && arr[4]===arr[7] && arr[1]!=undefined){
				addScore(arr[1]);
			}else
			if(arr[2]===arr[5] && arr[5]===arr[8] && arr[2]!=undefined){
				addScore(arr[2]);
			}else
			if(arr[3]===arr[6] && arr[6]===arr[9] && arr[3]!=undefined){
				addScore(arr[3]);
			}else
			if(arr[1]===arr[5] && arr[5]===arr[9] && arr[1]!=undefined){
				addScore(arr[1]);
			}else
			if(arr[3]===arr[5] && arr[5]===arr[7] && arr[3]!=undefined){
				addScore(arr[3]);
			}else 
			if(arr[1]!=undefined && arr[2]!=undefined && arr[3]!=undefined && arr[4]!=undefined && arr[5]!=undefined && arr[6]!=undefined && arr[7]!=undefined && arr[8]!=undefined && arr[9]!=undefined){
				this.winner="Remis!";
				// console.log('hej');
			}
		},
		initialState: function(){
			this.ticTocKey+=1;
			this.winner = "";
			this.win = false;
			this.fieldValues = [];
		},
		newGame: function(){
			this.initialState();
		}
	}
  });