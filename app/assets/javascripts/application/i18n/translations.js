I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"about":"About","account":"Account","account_activations":{"edit":{"actived":"Account activated!","invalid_link":"Invalid activation link!"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"base_title":"Ruby on Rails Tutorial App","contact":"Contact","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"english":"English","errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","blank":"can't be blank","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"doesn't match %{attribute}","content_type_blacklist_error":"You are not allowed to upload %{content_type} files","content_type_whitelist_error":"You are not allowed to upload %{content_type} files","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","extension_blacklist_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_whitelist_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","max_size_error":"File size should be less than %{max_size}","min_size_error":"File size should be greater than %{min_size}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image?","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"file_size_err":"Maximum file size is 5MB! Try again!","help":"Help","helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"home":"Home","login":"Login","logout":"Logout","microposts":{"create":{"create_error":"Content is invalid! Try again!","created":"Micropost created!"},"destroy":{"delete_error":"Delete error","deleted":"Micropost deleted"},"micropost":{"confirm":"You sure?"}},"news":"News","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"create":{"mail_not_found":"Email address not found","sended_mail":"Email sent with password reset instructions"},"edit":{"confirm":"Confirmation","pass":"Password","reset_pass":"Reset Password","update_pass":"Update password"},"new":{"forgot":"Forgot password","pass_expired":"Password reset has expired.","submit":"Submit"},"update":{"pass_emtry":"can not be empty","reseted":"Password has been reset."}},"profile":"Profile","sample_app":"sample app","sessions":{"create":{"acc_not_actived":"Account not activated. ","please_check_mail":"Check your email for the activation link."},"login_invalid":"Invalid email/password combination!","new":{"email":"Email","forgot_pass":"Forgot password?","login":"Login","new_user":"New user?","pass":"Password","remember":"Remember me on this computer","sign_up_now":"Sign up now!"}},"setting":"Setting","shared":{"micropost_form":{"compose":"Compose new micropost...","post":"Post"},"user_info":{"view_profile":"view my profile"}},"static_pages":{"about":{"and":"and","book":"book","rails":"Ruby on Rails","sample_application":"sample application","screencast_series":"screencast series","the":"the","this_is_sample":"This is the sample application for the tutorial.","title":"About","to_teach":"to teach web development with"},"contact":{"contact_page":"contact page","contact_the_ruby":"Contact the Ruby on Rails Tutorial about the sample app","title":"Contact"},"help":{"at_the":"at the","book":"book","get_help_on_the":"Get help on the","get_help_sample_app":"To get help on this sample app, see the","help_section":"Rails Tutorial help section","title":"Help"},"home":{"micropost_feed":"Micropost Feed","sign_up":"Sign up now!","this_is_home_page":"This is home page for the","title":"Home","welcome_sample":"Welcome to the Sample App"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"tutorial_link":"Ruby on Rails Tutorial","user":"Users","user_mailer":{"account_activation":{"activate":"Activate","click_link":"Click on the link below to activate your account:","hi":"Hi ","subject":"Account activation","welcome":"Welcome to the Sample App!"},"password_reset":{"if_you_did":"If you did not request your password to be reset","pass_reset":"Password reset","please_ignore":"please ignore this email and your pass will stay as it is","reset_pass":"Reset password","subject":"Password reset","this_link":"This link will expire in two hours.","to_reset":"To reset your password click the link below:"}},"users":{"create":{"please_check_mail":"Please check your email to activate your account."},"create_error":"Info is invalid! Please try again!","create_success":"Welcome to the Sample App!","destroy":{"deleted":"User deleted!"},"edit":{"change":"Change","edit_user":"Edit user","save_change":"Save changes","update_profile":"Update your profile"},"form":{"confirm_pass":"Confirmation","email":"Email","name":"Name","pass":"Password"},"index":{"all_user":"All user","require_login":"Please log in!"},"new":{"create_acc":"Create my account","signup":"Sign up"},"show":{"microposts":"Microposts","user_not_found":"User not found!"},"update":{"update_error":"Update error! Please check infomation again!","update_success":"Profile Updated!"},"user":{"confirm":"Are tou sure?","delete":"delete"}},"vietnamese":"Vietnamese","views":{"pagination":{"first":"First","last":"Last","next":"Next","previous":"Previous","truncate":"…"}}});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"about":"Giới thiệu","account":"Tài khoản","account_activations":{"edit":{"actived":"Kích hoạt tài khoản thành công!","invalid_link":"Đường dẫn kích hoạt tài khoản không hợp lệ!"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}},"models":{"user":{"attributes":{"email":{"blank":"không được bỏ trống!","invalid":"không hợp lệ!"},"name":{"blank":"không được bỏ trống!"},"password":{"blank":"không được bỏ trống!","too_short":"quá ngắn"}}}}}},"base_title":"Ứng dụng hướng dẫn Ruby on Rails","contact":"Liên hệ","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"english":"Tiếng Anh","errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","blank":"can't be blank","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"doesn't match %{attribute}","content_type_blacklist_error":"You are not allowed to upload %{content_type} files","content_type_whitelist_error":"You are not allowed to upload %{content_type} files","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","extension_blacklist_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_whitelist_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","max_size_error":"File size should be less than %{max_size}","min_size_error":"File size should be greater than %{min_size}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image?","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"file_size_err":"Kích thước tệp không được quá 5MB. Hãy thử lại!","help":"Trợ giúp","helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"home":"Trang chủ","login":"Đăng nhập","logout":"Đăng xuất","microposts":{"create":{"create_error":"Nội dung không hợp lê! Hãy thử lại!","created":"Tạo bài viết thành công!"},"destroy":{"delete_error":"Xoá bài viết không thành công","deleted":"Bài viết đã được xoá!"},"micropost":{"confirm":"Bạn chắc chắn muốn xoá?"}},"news":"Bản tin","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"create":{"mail_not_found":"Không tìm thấy email","sended_mail":"Liên kết khôi phục mật khẩu đã được gửi về email"},"edit":{"confirm":"Xác nhận mật khẩu","pass":"Mật khẩu mới","reset_pass":"Khôi phục mật khẩu","update_pass":"Cập nhật mật khẩu"},"new":{"forgot":"Quên mật khẩu","pass_expired":"Liên kết đã hết hạn.","submit":"Gửi"},"update":{"pass_emtry":"mật khẩu không được để trống","reseted":"Khôi phục mật khẩu thành công"}},"profile":"Thông tin cá nhân","sample_app":"ứng dụng mẫu","sessions":{"create":{"acc_not_actived":"Tài khoản chưa được kích hoạt. ","please_check_mail":"Vui lòng kiểm tra link kích hoạt trong email."},"login_invalid":"Thông tin đăng nhập không hợp lệ!","new":{"email":"Email","forgot_pass":"Quên mật khẩu?","login":"Đăng nhập","new_user":"Người dùng mới?","pass":"Mật khẩu","remember":"Lưu lại tôi trong máy tính này","sign_up_now":"Đăng ký ngay!"}},"setting":"Cài đặt","shared":{"micropost_form":{"compose":"Nội dung bài viết...","post":"Gửi"},"user_info":{"view_profile":"Xem thông tin của tôi"}},"static_pages":{"about":{"and":"và","book":"quyển sách","rails":"Ruby on Rails","sample_application":"về ứng dụng mẫu","screencast_series":"loạt ví dụ","the":"","this_is_sample":"Đây là ứng dụng mẫu cho hướng dẫn.","title":"Giới thiệu","to_teach":"để dạy phát triển web với"},"contact":{"contact_page":"trang liên hệ","contact_the_ruby":"Liên hệ với Hướng dẫn về Ruby on Rails về ứng dụng mẫu","title":"Liện hệ"},"help":{"at_the":"tại","book":"","get_help_on_the":"Nhận trợ giúp","get_help_sample_app":"Để nhận trợ giúp về ứng dụng mẫu này, hãy xem","help_section":"phần trợ giúp Rails tutorial","title":"Trợ giúp"},"home":{"micropost_feed":"Danh sách bài viết","sign_up":"Đăng kí ngay!","this_is_home_page":"Đây là trang chủ của","title":"Trang chủ","welcome_sample":"Chào mừng đến với Ứng dụng mẫu"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"tutorial_link":"Ruby on Rails Tutorial","user":"Danh sách người dùng","user_mailer":{"account_activation":{"activate":"Kích hoạt","click_link":"Hãy kích vào đường dẫn dưới đây để kích hoạt tài khoản:","hi":"Xin chào ","subject":"Kích hoạt tài khoản","welcome":"Chào mừng đến với ứng dụng mẫu!"},"password_reset":{"if_you_did":"Nế bạn không gửi yêu cầu khôi phục mật khẩu","pass_reset":"Mật khẩu khôi phục","please_ignore":"Hãy bỏ qua email này và mật khẩu của bạn vẫn giữ nguyên","reset_pass":"Khôi phục mật khẩu","subject":"Khôi phục mật khẩu","this_link":"Đường dẫn này sẽ có thời hạn 2 giờ.","to_reset":"Để khôi phục mật khẩu, nhấp vào đường dẫn dưới đây:"}},"users":{"create":{"please_check_mail":"Vui lòng kiểm tra email để kích hoạt tài khoản."},"create_error":"Thông tin đăng kí không hợp lệ!","create_success":"Chào mừng đến với Ứng dụng mẫu!","destroy":{"deleted":"Xoá người dùng thành công!"},"edit":{"change":"Thay đổi","edit_user":"Cập nhật thông tin","save_change":"Lưu thay đổi","update_profile":"Cập nhật thông tin cá nhân"},"form":{"confirm_pass":"Xác nhận mật khẩu","email":"Email","name":"Họ tên","pass":"Mật khẩu"},"index":{"all_user":"Danh sách người dùng","require_login":"Vui lòng đăng nhập trước!"},"new":{"create_acc":"Tạo tài khoản","signup":"Đăng ký"},"show":{"microposts":"Bài viết","user_not_found":"Không tìm thấy người dùng!"},"update":{"update_error":"Cập nhật thất bại! Vui lòng kiểm tra lại thông tin!","update_success":"Cập nhật thông tin thành công!"},"user":{"confirm":"Bạn chắc chắn muốn xoá?","delete":"Xoá người dùng"}},"vietnamese":"Tiếng Việt","views":{"pagination":{"first":"Trang đầu","last":"Trang cuối","next":"Trang sau","previous":"Trang trước","truncate":"…"}}});