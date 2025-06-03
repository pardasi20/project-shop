import React, { Component } from 'react'
import { Button } from "@/components/ui/button"
export default class Grid extends Component {
  render() {
    return (
      <div>
        <div class="container m-auto mt-2.5">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cols-1 xl:grid-cols-4 gap-2">
                <div class="bg-indigo-400 text-cenetr text-2xl font-bold font-serif text-amber-50 h-90 flex justify-center items-center">one</div>
                <div class="bg-indigo-400 text-cenetr text-2xl font-bold font-serif text-amber-50 h-90 flex justify-center items-center">three</div>
                <div class="bg-indigo-400 text-cenetr text-2xl font-bold font-serif text-amber-50 h-90 flex justify-center items-center">two</div>
                <div class="bg-indigo-400 text-cenetr text-2xl font-bold font-serif text-amber-50 h-90 flex justify-center items-center">fouer</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clip-rule="evenodd" />
</svg>

        </div>
      </div>
    )
  }
}
