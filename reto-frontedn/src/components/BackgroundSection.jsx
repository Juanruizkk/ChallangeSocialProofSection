import ImgBGMobileTop from '../assets/images/bg-pattern-top-mobile.svg'
import ImgBGMobileBot from '../assets/images/bg-pattern-bottom-mobile.svg'
import ImgBGDesktopTop from '../assets/images/bg-pattern-top-desktop.svg'
import ImgBGDesktopBot from '../assets/images/bg-pattern-bottom-desktop.svg'


const BackgroundSection = () => {
    return ( 
        <div >
            <picture className='absolute top-0 left-0 -z-1'>
                <source media='(max-width:375px)' srcSet={ImgBGMobileTop}/>
                <source media='(min-width:375px)' srcSet={ImgBGDesktopTop}/>
                <img src={ImgBGMobileTop} alt="Backgorund imagen" />
            </picture>
             <picture className='absolute bottom-0 right-0 -z-1'>
                <source media='(max-width:375px)' srcSet={ImgBGMobileBot}/>
                <source media='(min-width:375px)' srcSet={ImgBGDesktopBot}/>
                <img src={ImgBGMobileBot} alt="Backgorund imagen" />
            </picture>
            
        </div>
     );
}
 
export default BackgroundSection;