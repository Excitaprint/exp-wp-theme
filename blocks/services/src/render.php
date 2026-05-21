<div <?php echo get_block_wrapper_attributes(['class' => 'wp-block-services']); ?>>
    <div class="services-mast">
        <h3>Our Expert Electrical Services</h3>
        <p>How can we help?</p>
    </div>
    <div class="services-menu-wrapper">
        <button
            type="button"
            class="services-menu__button"
            data-service="group-panels-power">
            Panels & Power
        </button>
        <button
            type="button"
            class="services-menu__button"
            data-service="group-ev-solar-smart">
            EV, Solar & Smart
        </button>
        <button
            type="button"
            class="services-menu__button"
            data-service="group-lighting-services">
            Lighting Services
        </button>
        <button
            type="button"
            class="services-menu__button"
            data-service="group-wiring-repairs">
            Wiring & Repairs
        </button>
    </div>
    <div id="services-card-display" class="services-card-wrapper">
        <div id="group-panels-power" class="services-card-group">
            <div class="services-card">
                <div class="services-card__image-wrapper">
                    <img src="" alt="" />
                </div>
                <div class="services-card__h3_wrapper">
                    <h3></h3>
                </div>
            </div>
        </div>

        <div id="group-ev-solar-smart" class="services-card-group hidden">
            <div class="services-card">
                <div class="services-card__image-wrapper">
                    <img src="" alt="" />
                </div>
                <div class="services-card__h3_wrapper">
                    <h3></h3>
                </div>
            </div>
        </div>

        <div
            id="group-lighting-services"
            class="services-card-group hidden">
            <div class="services-card">
                <div class="services-card__image-wrapper">
                    <img src="" alt="" />
                </div>
                <div class="services-card__h3_wrapper">
                    <h3></h3>
                </div>
            </div>
        </div>

        <div id="group-wiring-repairs" class="services-card-group hidden">
            <div class="services-card">
                <div class="services-card__image-wrapper">
                    <img src="" alt="" />
                </div>
                <div class="services-card__h3_wrapper">
                    <h3></h3>
                </div>
            </div>
        </div>
    </div>
    <canvas class="services-lines"></canvas>
</div>