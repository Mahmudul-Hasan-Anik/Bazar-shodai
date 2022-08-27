import React from 'react'

const BannerDiscount = () => {
  return (
    <div className='banner_discount'>
        <p className='banner_discount-header'>Latest Super Discount Active Coupon Code</p>

        <div className='banner_discount-card'>
            <div className='discount-card-divOne'>
                 <img src="./image/hVege.jpg" />
                <div>
                    <h3>
                        <span style={{color:'red', fontWeight:'bold'}}>10%</span>{' '}
                        off 
                        <span className='discount-card-statusOne'>inactive</span>
                    </h3>
                    <h4>Summer Gift Voucher</h4>
                </div>
            </div>

            <div className='discount-card-divTwo'>
                <h4>SUMMER22</h4>
                <p>* This coupon apply when shopping more then $500</p>
            </div>
        </div>
        
        <div className='banner_discount-card'>
            <div className='discount-card-divOne'>
                 <img src="./image/fish.jpg" />
                <div>
                    <h3>
                        <span style={{color:'red', fontWeight:'bold'}}>15%</span>{' '}
                        off 
                        <span className='discount-card-statusTwo'>Active</span>
                    </h3>
                    <h4>Winter Gift Voucher</h4>
                </div>
            </div>

            <div className='discount-card-divTwo'>
                <h4>WINTER22</h4>
                <p>* This coupon apply when shopping more then $500</p>
            </div>
        </div>
    </div>
  )
}

export default BannerDiscount