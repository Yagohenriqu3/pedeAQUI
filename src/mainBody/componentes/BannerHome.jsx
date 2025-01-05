import bannerHomeImg from '../../assets/bannerhome.png'
import './BannerHome.css'

function BannerHome (){
    return(
        <div className='ContainerBannerHome'>
            <img src={bannerHomeImg} alt="bannerhome" />
        </div>
    )

}

export default BannerHome