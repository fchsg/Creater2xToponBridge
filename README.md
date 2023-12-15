ToponSDK接入:
Cocos Creator接入指南
https://newdocs.toponad.com/docs/cocoscreator
Android SDK广告下载
https://docs.toponad.com/#/zh-cn/android/download/package
Android原生广告demo
https://github.com/toponteam/TopOn-Android-Demo

        //ATSDK.setNetworkLogDebug(true);
        //ATSDK.integrationChecking(getApplicationContext());

Android接入注意事项
manifest添加
<uses-permission android:name="com.google.android.gms.permission.AD_ID" /> <!--非中国区SDK必要权限-->

Android上需要注意的： 使用原生的视频广告必须在AndroidManifest开启硬件加速，处理方式如下：
<application
        android:hardwareAccelerated="true">
        ....
</application>

Admob 添加ID
<meta-data
       android:name="com.google.android.gms.ads.APPLICATION_ID"
       android:value="ca-app-pub-3940256099942544~3347511713"/>

Activity添加
Topon Android 9及以上必须设置 添加Webview设置
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
    String processName = getProcessName();
       if (!getPackageName().equals(processName)) {
           WebView.setDataDirectorySuffix(processName);
       }
}

Android打包报错解决方案

调整Android Studio HeapSize
https://stackoverflow.com/questions/56075455/expiring-daemon-because-jvm-heap-space-is-exhausted

报错
Duplicate class com.google.common.util.concurrent.ListenableFuture
解决方案:https://www.jianshu.com/p/aa82a1d80380
1.build.gradle 添加
implementation 'com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava'  
2.删除Libs下 listenablefuture-1.0

报错 java.lang.RuntimeException: Unable to get provider androidx.startup.InitializationProvider
解决方案:https://stackoverflow.com/questions/65321223/unable-to-get-provider-androidx-startup-initializationprovider
manifest添加
 <provider
        android:name="androidx.startup.InitializationProvider"
        android:authorities="${applicationId}.androidx-startup"
        tools:node="remove" />

报错 Duplicate class com.google.android.gms
删除重复的 aar或者jar

报错 2 files found with path 'META-INF/identifiers_release.kotlin_module' from inputs:
buildGradle添加
packagingOptions {
exclude("META-INF/DEPENDENCIES")
exclude("META-INF/LICENSE")
exclude("META-INF/LICENSE.txt")
exclude("META-INF/license.txt")
exclude("META-INF/NOTICE")
exclude("META-INF/NOTICE.txt")
exclude("META-INF/notice.txt")
exclude("META-INF/ASL2.0")
exclude("META-INF/*.kotlin_module")
}






