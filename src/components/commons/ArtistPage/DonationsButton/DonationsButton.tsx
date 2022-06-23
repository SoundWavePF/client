import Swal from 'sweetalert2'
import style from './DonationsButton.module.css' 
import axios from "axios";


const DonationsButton = (props:any)=>{
  const swal:any = Swal

  const donate = (id:any, email:string, stripe:any)=>{
    swal.fire({
      title: 'How much do you want to donate?',
      icon: 'question',
      input: 'range',
      inputLabel: 'The amount',
      inputAttributes: {
        min: 1,
        max: 200,
        step: 1
      },
      inputValue: 15
    })
    .then((r:any)=>{
      if(r.value){
        let donation = { 
          artistId:id,
          userEmail:email, 
          amount: Number(r.value), 
          stripeId: stripe 
        }
      /*  axios.post('https://www.javierochoa.me/order',donation)
        .then((res:any)=>{
          console.log(res)
        })*/
        console.log(donation)
      }
    })
  } 
  return(
      <button className={style.donateButton} onClick={()=>donate(props.artistId,props.userEmail,props.stripe_Id)}>
        Donate
      </button>
  )
}
export default DonationsButton
