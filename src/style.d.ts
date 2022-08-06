// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        // 테마가 어떻게 보일지를 설명할 부분
        bgColor: string;
        textColor: string;
        btnColor: string;
        boxColor: string;
    }
}
