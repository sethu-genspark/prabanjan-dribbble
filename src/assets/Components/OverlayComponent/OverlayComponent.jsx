import React from 'react'
import './OverlayComponent.css'
import { Bookmark, Heart, MessageCircle, Info } from 'lucide-react'
import { BsEnvelope } from 'react-icons/bs'
import { LuUpload } from 'react-icons/lu'

function OverlayComponent({ item, onClose }) {
    return (
        <div className='overlay-container'>
            <button className='close-button' onClick={onClose}>
                &times;
            </button>
            <div className='overlay'>
                <div className='overlay-content'>
                    <div className='overlay-header'>
                        <h2>{item.thumbnailName}</h2>
                    </div>
                    <div className='overlay-subheader'>
                        <div className='profile-details'>
                            <img src={item.userImage} alt={item.userName} />
                            <div className='overlay-user-details'>
                                <h3 className='overlay-user-name'>
                                    {item.userName}
                                </h3>
                                <div className='more-details'>
                                    <p className='availability'>
                                        <div class='blink_me'></div>Available
                                        for work{' '}
                                    </p>
                                    <p className='follow'>Follow</p>
                                </div>
                            </div>
                        </div>
                        <div className='actions'>
                            <Heart
                                strokeWidth={2}
                                className='heart-icon-hover-effect'
                            />
                            <Bookmark
                                strokeWidth={2}
                                className='bookmark-icon'
                            />
                            <p className='get-in-touch-btn'>Get in touch</p>
                        </div>
                    </div>
                    <div className='shots-image'>
                        <img
                            src={item.thumbnailImage}
                            alt={item.thumbnailName}
                        />
                    </div>
                    <div className='more-actions'>
                        <Heart
                            className='heart-icon-hover-effect'
                            strokeWidth={2}
                        />
                        <Bookmark className='bookmark-icon' strokeWidth={2} />
                        <LuUpload
                            className='upload-icon-hover-effect'
                            strokeWidth={2}
                        />
                        <MessageCircle
                            className='comment-icon-hover-effect'
                            strokeWidth={2}
                        />
                        <Info
                            className='info-icon-hover-effect'
                            strokeWidth={2}
                        />
                    </div>
                    <div className='overlay-footer'>
                        <div className='overlay-footer-user-image'>
                            <span className='user-image-line'></span>
                            <img src={item.userImage} alt={item.userName} />
                            <span className='user-image-line'></span>
                        </div>
                        <h3 className='overlay-footer-user-name'>
                            {item.userName}
                        </h3>
                        <button className='footer-get-in-touch-btn'>
                            <div>
                                <BsEnvelope strokeWidth={0.5} />
                                Get in touch
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverlayComponent
