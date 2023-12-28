import "../App.css"
import { useInView } from "react-intersection-observer"

function Ribbon () {

    const [ref, inView ] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const tagOne = {
        num: '200+',
        des: 'Registered Students',
        index: 1
    }
    const tagTwo = {
        num: '40+',
        des: 'Courses are offered by us',
        index: 2
    }
    const tagThree = {
        num: '4.9/5',
        des: "Rating's given by our students",
        index: 3
    }
    const arr = [tagOne, tagTwo, tagThree];



    return(
        <div className='ribbon'>
            {arr.map(tag => {
                return (
                    <div key={tag.index} ref={ref} className={`ribbon-tag ${inView ? 'active': ''}`}>
                        <div>{tag.num}</div>
                        <div>{tag.des}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Ribbon;