keys = %w[
INSTALLATION_NAME
LOGO_THUMBNAIL
LOGO
LOGO_DARK
BRAND_URL
WIDGET_BRAND_URL
BRAND_NAME
TERMS_URL
PRIVACY_URL
]

keys.each do |key|
  v = ENV[key]
  next if v.nil?

  config = InstallationConfig.find_by(name: key)
  if config
    config.update(value: v)
    puts "updated #{key}"
  else
    puts "missing #{key}"
  end
end