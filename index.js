class Queue{
    constructor(){
        this.array = []
        this.lengths = this.array.length
    }
    push(student){
        this.array.push(student) 
    }
    pop(){
        this.array.pop() 
    }
    peekFirst(){

        console.log(this.array(this.lengths++))
    }
    peekLast(){
        console.log(this.array(this.lengths--))
    }
    isEmpty(){
        if(this.length == 0){
           console.log("Empty")
        }

    }
    print(){
        console.log(this.array.print())
    }
    
    

    }
    const studentQueue = new Queue 
    
    studentQueue.push("Samuel",)
    studentQueue.push("Samu",)
    studentQueue.push("Sami",)
    studentQueue.peekFirst()
    // studentQueue.pop()
    // studentQueue.isEmpty()

    
    console.log(studentQueue)
    // console.log(this.seize)
