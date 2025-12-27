<template>
  <div class="flex items-center select-none">
    <!-- Icon -->
    <div class="flex items-center mr-4">
      <!-- < -->
      <span class="w-[14px] h-[14px] rotate-45 border-l-[4px] border-b-[4px] border-gray-300 dark:border-gray-200"/>

      <!-- / -->
      <span class="ml-2 w-[6px] h-[22px] bg-[#00c16a] skew-x-[-28deg] mx-[-1px]"/>

      <!-- > -->
      <span
        class="w-[14px] h-[14px] rotate-45
               border-r-[4px] border-t-[4px]
               border-[#00c16a]"
      />
    </div>

    <!-- Text -->
    <div class="flex items-baseline font-semibold tracking-wide">
      <UText
        as="span"
        class="text-[26px] text-gray-700 dark:text-gray-200"
      >
        BYTE
      </UText>

      <UText
        as="span"
        class="ml-[6px] text-[26px] text-[#00c16a]"
      >
        JS
      </UText>
    </div>
  </div>
</template>
