module.exports = function(grunt){
    //初始化grunt 配置
    grunt.initConfig({

        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //concat插件的配置信息
        concat: {
            options:{
                separator:";",
                stripBanners:true, //合并时允许输出头部信息
                banner:'/* version'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            // cssConcat:{
            //     src:['src/css/css1.css','src/css/css2.css'],
            //     dest:'src/css/concat/<%= pkg.name %> - <%= pkg.version %>.css' //dest 是目的地输出
            // },
            jsConcat:{
                src:[
                    'node_modules/vue/dist/vue.min.js',
                    'node_modules/vuex/dist/vuex.min.js',
                    'node_modules/vue-router/dist/vue-router.min.js'
                ],
                dest:'static/build/dist/js/app-vue-<%= pkg.version %>.min.js'
            }
        },
        //压缩css
        // cssmin:{
        //     options:{
        //         stripBanners:true, //合并时允许输出头部信息
        //         banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build:{
        //         src:'src/css/concat/<%=pkg.name %> - <%=pkg.version %>.css',//压缩是要压缩合并了的
        //         dest:'dist/css/<%= pkg.name %> - <%= pkg.version %>.min.css' //dest 是目的地输出
        //     }
        // },
        //压缩js
        uglify:{
            options:{
                mangle: true,
                report: "min",
                //beautify:true,

                stripBanners:true,
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'static/build/concat/js/app - <%=pkg.version %>.js',//压缩是要压缩合并了的
                dest:'static/build/dist/js/app- <%= pkg.version %>.min.js' //dest 是目的地输出
            },
            buildAuto:{
                files: [{
                    expand:true,
                    cwd:'static/build/concat/js',//js目录下
                    src:'*.js',//所有js文件       (**匹配任何字符，包括/，所以用在目录路径里面)
                    dest: 'static/build/dist/js',//输出到此目录下
                    //ext:".min.js"
                    rename: function (dst, src) {
                           // To keep the source js files and make new files as `*.min.js`:
                    return dst + '/' + src.replace('.js', '.min.js');
                    }
                },
                {
                    src:'node_modules/element-ui/lib/index.js',//压缩是要压缩合并了的
                    dest:'static/build/dist/js/element-ui.min.js' //dest 是目的地输出
                }

                ]
            }
        },
        //copy
        copy: {
          main: {
            expand: true,
            cwd: 'static/build/dist/js',
            src:"*.js",
            dest: 'dist/vendor/js',
          },
        },
        clean: {
            after: ['static/build'],
            before:['dist/vendor/js']
        },
        //check js
        // jshint:{
        //     options:{
        //         jshintrc:'.jshint'
        //     },
        //     build:['Gruntfile.js','src/js/*js']
        // },
        // //check css
        // csslint:{
        //     options:{
        //         csslintrc:'.csslint'
        //     },
        //     build:['src/css/*.css']

        // },
        //watch自动化
        // watch:{
        //     build:{
        //         files:['src/js/*.js','src/css/*.css'],
        //         tasks:['jshint','csslint','concat','cssmin','uglify'],
        //         options:{spawn:false}
        //     }
        // }

    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['concat','uglify:buildAuto','clean:before','copy','clean:after']);//先进行语法检查，如果没有问题，再合并，再压缩
};