<template>
    <div class="event-list" v-if="display.isShowList">
        <div class="row">
            <EventItem v-for="item in events" @click="clickItem(item)" :item="item">
            </EventItem>
        </div>
        <div class="d-flex">
            <button class="btn btn-primary ms-auto" @click="clickNewItemButton">作成</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import EventDisplay from '@/ts/display/EventDisplay';
import EventItem from './EventItem.vue';
import EventModel from '@/ts/models/EventModel';
import { ref } from 'vue'

const eventData: EventModel[] = []
eventData.push(new EventModel('Vue Fes Japan 2023', new Date('2023/12/03 14:00'), [
    "Vue Fes Japan 2023 の報告会を、LINEヤフーコミュニケーションズのカフェスペースでオフラインにて開催いたします。"
    , "Vue Fes Japan 2023 は、2018年以来5年ぶりに、10月28日にオフラインで開催されました。"
    , ""
    , "Vue Fes Japan は 2018年に誕生した日本最大級のVue.jsカンファレンスです。"
    , "Vue関連の技術や事例に関する良質なセッションが行われ、また異なる分野で活躍するVue技術者が一堂に会する場となっています。"
    , ""
    , "この報告会では Vue Fes Japan 2023 でも取り上げられていた、今後のVueとRustの関係について、kazuponさんにお話しいただきます。 また、ブーススポンサーを務めたLINEヤフーコミュニケーションズのエンジニアの方も登壇予定です。"
], 'LINEヤフーコミュニケーションズカフェスペース'
))
eventData.push(new EventModel('忘年会 in 2022', new Date('2022/12/31 18:00'), [
    "2022年の忘年会を実施します。",
    "今年も残り少なくなってまいりました。恒例の忘年会を下記の通り開催しますので、業務に差支えのない範囲でご参加ください。社内メンバーの親睦を深め、新しい気持ちで新年を迎えたいと思います。"
    , "なお、忘年会終了後に自由参加で二次会を行います。かくし芸大会、カラオケ大会なども予定しております。"
], '渋谷 cafe friends'))
eventData.push(new EventModel('Vue Fes Japan Online 2022', new Date('2022/10/16 10:00'), [
    "Vue.js をはじめ、多くの OSS は利用者からのフィードバックやコントリビューションによって成り立っています。しかし、協力の意思はあっても、実際どのように参加していけばいいのかわからない方も多いのではないでしょうか？"
    , "このセッションでは、実際に Vue.js 日本ユーザーグループにて OSS 開発に参加・協力しているメンバーが、バグ報告やパッチ提供、OSS 開発への参加やドキュメントサポート、そしてコミュニティの運営など、数多くのコントリビューターとどのように進めているのかをご紹介します。"
    , ""
    , "miyaocast + お元気ですか.fm の Vue Fes 合同企画開催です！Vue でコンポーネントをつくるときにどんなことを考えているのか、エンジニア＆デザイナー目線で語ります。Vue3 で開発がどう変わったか、デザインシステム開発についてなど、ざっくばらんなテーマが聴けます！"
    , "Vue.js 日本ユーザーグループでは、これから Vue.js を学び始めたい方を支援するため、どなたでも自由にご利用いただけるハンズオンコンテンツを開発し提供しています。"
    , "このセッションは、参加されるみなさんが一緒に手を動かしながら Vue.js アプリケーション開発を体験できるハンズオン（実際にコードを書きながら学習するスタイル）です。"
    , "Vue.js をこれから学んでみたいという初心者の方から、Vue 3 の新しい開発方法をキャッチアップしたい経験者の方まで楽しんでいただける内容になっており、Vue.js 日本ユーザーグループスタッフによる Q&A も実施します。Vue.js を触ったことがないかたもぜひお気軽にご参加下さい！"
], 'オンライン'
))

const events = ref(eventData)
const props = defineProps({
    display: {
        type: EventDisplay,
        required: true
    }
})

const clickNewItemButton = () => {
    props.display.showEdit()
}

const clickItem = (item: EventModel) => {
    props.display.item = item
    props.display.showDetail()
}

</script>