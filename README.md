ToponSDK接入:
Cocos Creator接入指南
https://newdocs.toponad.com/docs/cocoscreator
Android SDK广告下载
https://docs.toponad.com/#/zh-cn/android/download/package


Android 打包报错解决方案
报错
Duplicate class com.google.common.util.concurrent.ListenableFuture
解决方案:https://www.jianshu.com/p/aa82a1d80380
build.gradle 添加
implementation 'com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava'  

报错 java.lang.RuntimeException: Unable to get provider androidx.startup.InitializationProvider
解决方案:https://stackoverflow.com/questions/65321223/unable-to-get-provider-androidx-startup-initializationprovider
manifest添加
 <provider
        android:name="androidx.startup.InitializationProvider"
        android:authorities="${applicationId}.androidx-startup"
        tools:node="remove" />