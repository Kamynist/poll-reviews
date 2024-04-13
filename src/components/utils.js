export function setId(arr){
  let index = 0
  arr.forEach((f)=>{
    f.id = index
    console.log('index')
    index++
  })
}
