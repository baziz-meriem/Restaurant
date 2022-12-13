import React ,{useState}from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import "./Counter.css"
const Counter = ({className,...rest}) => {
    const [viewPortEntered,setViewPortEntered] = useState(false)
  return (
    <>
    <section className='counter'>
    <div className="counter-row">
        <div className="counter-column">
            <strong data-number='305'>
                <CountUp {...rest} start = {viewPortEntered ? null : 0} end = {305}>
                    {({ countUpRef }) =>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange = {isVisible => {
                                if(isVisible) {
                                    setViewPortEntered(true);
                                }
                            }}
                            delayedCall>
                                <span className='number' ref={countUpRef}></span>
                            </VisibilitySensor>
                        )
                    } }
                </CountUp>
            </strong>
            <span>On Going <br/> Projects</span>
        </div>

        <div className="counter-column">
            <strong data-number='305'>
                <CountUp {...rest} start = {viewPortEntered ? null : 0} end = {305}>
                    {({ countUpRef }) =>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange = {isVisible => {
                                if(isVisible) {
                                    setViewPortEntered(true);
                                }
                            }}
                            delayedCall>
                                <span className='number' ref={countUpRef}></span>
                            </VisibilitySensor>
                        )
                    } }
                </CountUp>
            </strong>
            <span>On Going <br/> Projects</span>
        </div>

        <div className="counter-column">
            <strong data-number='305'>
                <CountUp {...rest} start = {viewPortEntered ? null : 0} end = {305}>
                    {({ countUpRef }) =>{
                        return(
                            <VisibilitySensor
                            active = {!viewPortEntered}
                            onChange = {isVisible => {
                                if(isVisible) {
                                    setViewPortEntered(true);
                                }
                            }}
                            delayedCall>
                                <span className='number' ref={countUpRef}></span>
                            </VisibilitySensor>
                        )
                    } }
                </CountUp>
            </strong>
            <span>On Going <br/> Projects</span>
        </div>
        
    </div>
    </section>

    </>
  )
}

export default Counter