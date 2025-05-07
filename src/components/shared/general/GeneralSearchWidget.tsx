'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchIcon } from '../icons'

const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Strawberry',
    'Watermelon',
    'Blueberry',
    'Pineapple',
]

const GeneralSearchWidget = () => {
    const [query, setQuery] = useState('')
    const [filteredItems, setFilteredItems] = useState<string[]>([])
    const [isFocused, setIsFocused] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)
    const listRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (query.length > 0) {
            const filtered = items.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            )
            setFilteredItems(filtered)
            setSelectedIndex(-1)
        } else {
            setFilteredItems([])
        }
    }, [query])


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (filteredItems.length === 0) return

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex((prev) =>
                prev < filteredItems.length - 1 ? prev + 1 : 0
            )
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : filteredItems.length - 1
            )
        }

        if (e.key === 'Enter' && selectedIndex >= 0) {
            setQuery(filteredItems[selectedIndex])
            setIsFocused(false)
        }
    }


    useEffect(() => {
        const listItems = listRef.current?.children
        if (listItems && selectedIndex >= 0) {
            const selectedEl = listItems[selectedIndex] as HTMLElement
            selectedEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        }
    }, [selectedIndex])

    return (
        <div className="relative w-full md:w-[300px] lg:w-[400px]">

            <div className="flex items-center px-2 relative ">
                <div className="border-gray-400/50 pr-2 absolute left-4">
                    <SearchIcon className="size-5 fill-gray-700 dark:fill-zinc-500 group-hover:fill-indigo-500 dark:group-hover:fill-zinc-400" />
                </div>
                <input type="text" placeholder="Search sales, stocks and receipts..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 100)} // allow mouse click before blur
                    onKeyDown={handleKeyDown}
                    className="w-full py-1 dark:text-zinc-400 bg-white dark:bg-zinc-800 rounded-md lg:w-[500px] caret-indigo-500 dark:caret-zinc-500 border bg-gray-white border-gray-300/20 focus:border-indigo-500 dark:focus:border-zinc-700 indent-[20px] outline-none focus:ring-0 focus:outline-none px-4 text-lg placeholder:text-base dark:placeholder:text-zinc-500 focus:bg-blue-50/30" />


            </div>

            <AnimatePresence>
                {isFocused && filteredItems.length > 0 && (
                    <motion.ul
                        ref={listRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[10000] w-full mt-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
                    >
                        {filteredItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`px-4 py-2 cursor-pointer ${selectedIndex === idx
                                    ? 'bg-blue-100 dark:bg-zinc-700 text-blue-600 dark:text-white'
                                    : 'hover:bg-gray-100 dark:hover:bg-zinc-700'
                                    }`}
                                onMouseDown={() => {
                                    setQuery(item)
                                    setIsFocused(false)
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}


export default GeneralSearchWidget;