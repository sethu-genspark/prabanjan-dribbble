import React, { useRef, useState } from 'react'
import './FilterComponent.css'
import { ChatState } from '../../../ContextProvider'
import feedData from '../../data'

function FilterComponent() {
    const { selectedFilter, setSelectedFilter, data, setData } = ChatState()
    const [scrollX, setScrollX] = useState(0)
    const [scrollEnd, setScrollEnd] = useState(false)
    const scroll = useRef(null)
    // const [defaultFilter, setDefaultFilter] = useState('discover')

    const slideLeft = () => {
        const shift = -300
        scroll.current.scrollBy({
            left: shift,
            behavior: 'smooth',
        })
        setScrollX(scrollX + shift)
        updateScrollEnd()
    }

    const slideRight = () => {
        const shift = 300
        scroll.current.scrollBy({
            left: shift,
            behavior: 'smooth',
        })
        setScrollX(scrollX + shift)
        updateScrollEnd()
    }

    const updateScrollEnd = () => {
        if (
            scroll.current &&
            Math.floor(
                scroll.current.scrollWidth - scroll.current.scrollLeft
            ) <= scroll.current.offsetWidth
        ) {
            setScrollEnd(true)
        } else {
            setScrollEnd(false)
        }
    }

    const scrollCheck = () => {
        setScrollX(scroll.current.scrollLeft)
        updateScrollEnd()
    }

    const handleChangeDropdown = (event) => {
        const selectedValue = event.target.value
        setSelectedFilter(selectedValue)

        if (selectedValue === 'Following') {
            setData(feedData)
        } else if (selectedValue === 'Popular') {
            setData(
                feedData.filter(
                    (item) => item.category.toLowerCase() === 'popular'
                )
            )
        } else if (selectedValue === 'New & Noteworthy') {
            setData(
                feedData.filter(
                    (item) => item.category.toLowerCase() === 'new & noteworthy'
                )
            )
        }
    }

    return (
        <div className='filters'>
            <div className='dropdown-filter'>
                <select
                    className='select-dropdown'
                    onChange={handleChangeDropdown}
                    value={selectedFilter || 'Following'}>
                    <option value='Following'>Following</option>
                    <option value='Popular'>Popular</option>
                    <option value='New & Noteworthy'>New & Noteworthy</option>
                </select>
            </div>
            <div className='category-filter'>
                <div
                    onClick={slideLeft}
                    className={`left-arrow active${
                        scrollX < 1 ? 'is-disabled' : ''
                    }`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5 8.25 12l7.5-7.5'
                        />
                    </svg>
                </div>
                <div ref={scroll} onScroll={scrollCheck} className='categories'>
                    <div onClick={() => setData(feedData)}>Discover</div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('animation')
                                )
                            )
                        }>
                        Animation
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('branding')
                                )
                            )
                        }>
                        Branding
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('illustration')
                                )
                            )
                        }>
                        Illustration
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('mobile')
                                )
                            )
                        }>
                        Mobile
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('print')
                                )
                            )
                        }>
                        Print
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('productDesign')
                                )
                            )
                        }>
                        Product Design
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('typography')
                                )
                            )
                        }>
                        Typography
                    </div>
                    <div
                        onClick={() =>
                            setData(
                                feedData.filter((item) =>
                                    item.tags.includes('webDesign')
                                )
                            )
                        }>
                        Web Design
                    </div>
                </div>
                <div
                    onClick={slideRight}
                    className={`right-arrow active${
                        !scrollEnd ? '' : 'is-disabled'
                    }`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </div>
            </div>
            <div className='tag-filters'>
                <button className='filters-btn'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='12'
                        viewBox='0 0 24 24'
                        color='black'
                        role='img'>
                        <path d='M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z'></path>
                    </svg>{' '}
                    Filters
                </button>
            </div>
        </div>
    )
}

export default FilterComponent
