function fibonacci(){
    let fib=0;
    let list=[0,1];
    while(fib<500){
        fib=list[list.length-2]+list[list.length-1];  
        list.push(fib);
    }
    console.log(list);
}
fibonacci();
