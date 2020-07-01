export const priceformat =(x)=>{
    return x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}