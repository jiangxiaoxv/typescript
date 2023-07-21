
declare function setTitle(title: string | number): void

declare function getTitle(): string

declare let documentTitle: string

declare module 'moment' {
    export function myFunction(): void
}


declare global {
    interface window {
        gio: boolean
    }
    namespace globalLib {
        function doAnything(): void
    }
}

window.gio = {}