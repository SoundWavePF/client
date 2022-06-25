import Swal from 'sweetalert2'
import style from './DonationsButton.module.css' 
import axios from "axios";


const DonationsButton = (props:any)=>{
  const swal:any = Swal
  
  const donate = (id:any, email:string, stripe:any)=>{
    swal.fire({
      icon:'question',
      title: 'How much do you want to donate?',
      input: 'text',
      inputLabel: 'The amount is in USD',
      confirmButtonColor: '#ffee32',
      cancelButtonColor: '#dd6b55',
      showCancelButton: true,
      inputValidator: (value:any) => {
        console.log('ACA value',value)
        if (!/^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/.test(value)) {
          swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Enter a number amount!',
            confirmButtonColor: '#ffee32',
          })
        }else{
          if(value<=0){
            swal.fire({
              icon: 'error',
              title: 'Error...',
              text: 'Enter an amount greater than zero!',
              confirmButtonColor: '#ffee32',
            })
          }else{
            let donation = { 
              artistId:id,
              userEmail:email, 
              amount: Number(value), 
              stripeId: stripe 
            }
            swal.fire({
              title:'Success!', 
              text:'Redirecting', 
              icon:'success',
              confirmButtonColor: '#ffee32',
            })
            axios.post('https://www.javierochoa.me/order',donation)
            .then(({data}:any)=>{
              window.location.href = data.url
            })
          }
        }
      }
    })
  } 
  return(
      <button className={style.donateButton} onClick={()=>donate(props.artistId,props.userEmail,props.stripeId)}>
        Donate
      </button>
  )
}
export default DonationsButton
